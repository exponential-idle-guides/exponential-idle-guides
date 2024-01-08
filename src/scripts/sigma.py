import math
def sigmaInputs():
  print("You are at 1dσ. For Bigma/Skipma detection, please input information below.")
  tin, starsin, accelin, adbool="","","",""
  while type(tin)==str:
    tin=input("What is your current t? (x.xxe+X)\n")
    try:
      if float(tin) <= 0:print("\nPlease input your current t.")
      else:tin=float(tin)
    except:
      print("\nPlease input your current t.")
  while type(starsin)==str:
    starsin=input("What is your current stars? (x.xxe+X)\n")
    try:
      if int(float(starsin)) <= 0:print("\nPlease input your current stars.")
      else:starsin=int(float(starsin))
    except:
      print("\nPlease input a number for stars.")
  while type(accelin)==str:
    accelin=input("What is your current accel? (2.85x if unknown)\n")
    try:
      if 3.18 > float(accelin) >= 1:accelin=float(accelin)
      else:print("\nPlease input a valid accel.")
    except:
      print("\nPlease input your current accel.")
  while type(adbool)==str:
    adbool=input("Are you using ad bonus? (True or False)\n")
    try:
      if adbool in ("false", "true"):adbool.capitalize()
      adbool=bool(adbool)
    except:
      print("\nPlease type in True or False.")
  print("\n")
  print(f'ignore (send if error report): {tin} - {starsin} - {accelin} - {adbool}')
  return (tin, starsin, accelin, adbool)

def sigmaCalc(sigma, ft, otherinputs):
  sigma-=55
  t, stars, acceleration, ad = otherinputs
  if acceleration==2.85:acceleration=2.85380860601
  adbonus= 1.5 if ad else 1
  log10db= ft * 0.8 + math.log10(4e6)
  log10dpsi= (ft / 25 - 1) * math.log10(2)
  dtSpeed = (ft / (15.0*math.log10(2)) + 0.1) / 10
  dtLevels = ft / math.log10(4)
  dt = dtSpeed * dtLevels * adbonus * acceleration
  vals=[
    math.log10(dt),
    0.7 * math.log10(1+t),
    math.log10(1+stars),
    log10db / (10 * (log10db**0.5)),
    ft / 1300.00,
    log10dpsi / 225 * log10dpsi**0.5,
  ]
  levels, maxLevels=[0,0,0,0,0,0,0], [999,999,999,8,8,8,6]
  curSum, history, MAX_DFS_SIZE=0, [], 5000

  def researchCost(num):return num//2 + 1
  def getCost(num):
    if num % 2 == 1: 
      return (num**2 - 1) / 4 + (num + 1) / 2
    return (num**2 + 2 * num) / 4
  def getCostOrder(order):
    return 2*order[6]+sum(getCost(order[i]) for i in range(len(order)-1))
  def getTotalBoost(order):
    return (1 + order[6]*vals[6])*sum(order[i]*vals[i] for i in range(len(order)-1))
  def maxPurchaseCount(curLevel, sigma):
    if researchCost(curLevel)>sigma: return 0
    levels=0
    if curLevel%2==1:
      sigma-=researchCost(curLevel)
      curLevel+=1
      levels+=1
    curLevel+=1
    bulks = ((curLevel**2+4*sigma)**0.5 - curLevel)//2
    sigma-=bulks*(curLevel+bulks)
    curLevel+=2*bulks-1
    levels+=2*bulks
    if researchCost(curLevel)<=sigma:levels+=1
    return levels

  while True:
    cand, cval=None, 0
    for i in range(7):
      if levels[i] >= maxLevels[i]: continue
      if i==6:cost, curval=2,curSum/20
      else:
        cost= researchCost(levels[i])
        curval=vals[i]/cost
      if curval > cval:
        cand, cval=i if cost <= sigma else None, curval
    
    if cand == None:break
    history.append(cand)
    if cand==6: sigma-=2
    else:
      curSum+= vals[cand]
      sigma-= researchCost(levels[cand])
    levels[cand]+=1
  
  while len(history)>0:
    pool, dims=1,0

    for i in range(7):
      if levels[i]>=maxLevels[i]:continue
      more=sigma//2 if i==6 else maxPurchaseCount(levels[i],sigma)
      pool*=min(more, maxLevels[i]-levels[i])+1
      dims+=1
    
    heur = pool/3 if dims<6 else pool/(20 if dims==6 else 60)
    if heur>MAX_DFS_SIZE:break
    
    lastbest=history.pop()
    levels[lastbest]-=1
    if lastbest==6:
      sigma+=2
    else:
      sigma+=researchCost(levels[lastbest])
      curSum-=vals[lastbest]      
  
  def search(i, sigma, curSum):
    if i==6:
      cnt = min(levels[i] + sigma//2, 6)
      return {'cnt': [cnt], 'Sum': curSum * (1 + cnt / 10)}
    maxres=None
    for j in range(levels[i], maxLevels[i]+1):
      res=search(i+1, sigma, curSum)
      if maxres is None or res['Sum'] >= maxres['Sum']:
        maxres = res
        maxres['cnt'].append(j)
      
      sigma -= researchCost(j)
      if sigma < 0:break
      curSum +=vals[i]
    return maxres
  end=search(0,sigma,curSum)
  end['cnt'].reverse()
  return end