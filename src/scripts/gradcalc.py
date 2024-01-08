import sys
import math
from pathlib import Path
sys.path.insert(0,f'{str(Path().resolve())}/packages')
from packages.gspread import authorize
from packages.oauth2client.service_account import ServiceAccountCredentials
import time
from datetime import datetime

tau, phi, sigma="hi", "hi", "hi"
print("Input number after e only")
while isinstance(tau, str):
  tau=input("What is your current Tau(τ)?\n")
  try:
    if float(tau) < 0: print("\nPlease input a valid current Tau.")
    else:tau=float(tau)
  except:
    print("\nPlease input a number for Tau.")
while isinstance(phi, str):
  phi=input("What is your current Phi(φ)?\n")
  try:
    if float(phi) < 0: print("\nPlease input a valid current Phi.")
    elif float(phi)==tau==0:print("Please use the student calculator: https://conicgames.github.io/exponentialidle/students.html")
    else:phi=float(phi)
  except:
    print("\nPlease input a number for Phi.")
while isinstance(sigma, str):
  sigma=input("How many students(σ) do you have currently?\n")
  try:
    if float(sigma) < 5:print("\nPlease input a valid student count.")
    else:sigma=float(sigma)
  except:
    print("\nPlease input a number for students.")
print("\n")

finalOutput, Ft, gradSection, upperLimits, error_message, infinite_loop, inputs="N/A", "N/A", "N/A", "N/A", "", False, [""]
ftBounds = {
  #Format → (sigma lower, sigma upper, Ft lower, Ft upper): gradFt
  (0, 15, -math.inf, 4000): 4000,
  (14, math.inf, -math.inf, 4800): 4800,
  (16, 18, -math.inf, math.inf): 4800,
  (17, 20, -math.inf, math.inf): 5000,
  (20, 20, -math.inf, math.inf): 5200,
  (0, 25, 5899, math.inf): 6000,
  (25, 25, -math.inf, 7600): 7600,
  (30, 30, math.inf, 8200): 8000,
  (0, 40, 8899, math.inf): 9000,
  (84, 95, 0, 20100): 20000,
  (0, 65, 13699, math.inf): 14000,
  (0, 75, 15499, 16500): 16000,
  (0, 85, 17445, 18500): 18000,
  (40, 40, 9100, 9500): 9600,
  (0, 52, 10700, 11300): 11200,
  (0, 60, 12300, 12900): 12800,
  #190-230 skipped for R9
  (0, 104, 20600, 21900): 21800,
  (0, 114, 22350, 23700): 23600,
  (0, 122, 24000, 25300): 25200,
  (0, 130, 25700, 26900): 26800,
  (0, 139, 27300, 28700): 28600,
  (0, 147, 28950, 30300): 30200,
  (0, 155, 30650, 31900): 31800,
  (0, 164, 32300, 33700): 33600,
  (0, 171, 34000, 35100): 35000,
  (0, 180, 35650, 36900): 36800,
  (0, 188, 37300, 38500): 38400,
  (0, 196, 38900, 40100): 40000,
  (0, 205, 40600, 41900): 41800,
  (0, 213, 42300, 43500): 43400,
  (0, 221, 43900, 45100): 45000,
  (0, 230, 45600, 46900): 46800,
  (0, 238, 47300, 48500): 48400
}

try:
  scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
  creds = ServiceAccountCredentials.from_json_keyfile_name('Encryption_Key.json', scope)
  client = authorize(creds)
  grad_sheet, grad_data_sheet = client.open('Exponential Idle Average Tau*Phi (Created by Baldy)'), client.open('Exponential Idle Phi*Tau Data Collection (Created by Baldy)')
  Equations_of_Doom, Error_Collection_Grad, Data_Collection_Grad = grad_sheet.get_worksheet(2), grad_data_sheet.get_worksheet(5), grad_data_sheet.get_worksheet(3)
except Exception as err:
  print("An error occured contacting the calculation sheet. Please contact Baldy about this. It may be due to too much traffic so try again in 10-20minutes.")
  print(f"\nExact Error:\n{err}")

def main():
  phi_tau = tau+phi
  global error_message
  global finalOutput
  global Ft
  global gradSection
  global upperLimits

  def gradSection():
    if tau > 0:
      if sigma > 19:
        if phi_tau < 1461:
            if sigma < 25 and phi_tau < 240: return 277
            elif sigma < 35 and 575 > phi_tau > 230: return 303
            elif sigma < 40 and 730 > phi_tau > 550: return 332
            elif sigma < 45 and 855 > phi_tau > 715: return 355
            elif sigma < 50 and 1015 > phi_tau > 845: return 379
            elif phi_tau > 1000: return 404
            else: return 45
        else:
          if sigma > 64:
            if sigma > 232 and phi_tau > 6339: return 143
            elif phi_tau < 6341: 
              if sigma < 75 and phi_tau < 1765: return 435
              elif sigma < 85 and 2110 > phi_tau > 1750: return 467
              elif phi_tau > 2085: return 507
              else: return 114
            elif sigma < 233: return "Student Count too low for Phi*Tau. You should have 233 students or greater by now."
            else: return "Phi*Tau too low for student count."
          else: return "Student Count too low for Phi*Tau. You should have R9 at ee14,000 by now."
      else: return "Upon reaching ee5k please put students into Theory 1.\nIf you have no theories please input less than 20 for students."
    elif phi < 93:
      if phi > 26: return 12
      else: return "Phi too low for next graduation.\nPlease use the student calculator: https://conicgames.github.io/exponentialidle/students.html"
    else: return "Upon reaching ee5k please put students into Theory 1.\nIf you have no theories please input 0 for Tau."

  def finalFt(gradFt):
    gradStud = gradFt / 200 - 5
    if gradStud <= sigma:
      if sigma<20:
        return "Phi too low for next graduation.\nPlease use the student calculator: https://conicgames.github.io/exponentialidle/students.html"
      return "Phi*Tau too low for next graduation."

    for (sigmalb, sigmaub, Ftlb, Ftub), Ftout in ftBounds.items():
      if sigmaub > sigma > sigmalb and Ftub > gradFt > Ftlb: 
        gradFt=Ftout
        break
        
    if (gradFt/200-5) == (sigma+1) and sigma > 142:
      from sigmaCalc import sigmaCalc
      from sigmaCalc import sigmaInputs
      global inputs
      inputs=sigmaInputs()

      curr = sigmaCalc(sigma, gradFt, inputs)
      last = sigmaCalc(sigma-1, gradFt-200, inputs)
      if curr['cnt'] == last['cnt']:gradFt+=200
      else:
        lastDiff = last['Sum'] - sigmaCalc(sigma-2, gradFt-400, inputs)['Sum']
        currDiff = curr['Sum'] - last['Sum']
        nextDiff = sigmaCalc(sigma+1, gradFt+200, inputs)['Sum'] - curr['Sum']
        # 1.48 is experimental bound for bigmas
        if currDiff / max(nextDiff, lastDiff) > 1.48: gradFt+=200

    boost_dict={
      #Format → (grad lower, grad upper, sigma lower, sigma upper): (boostDiff, preBoost, postBoost)
      (-math.inf, 75, 65, 75): (gradStud / sigma, sigma / 20, gradStud / 20),
      (75, 85, 65, 75): (gradStud**2 / (sigma * 20), sigma / 20, (gradStud / 20)**2),
      (85, math.inf, 65, 75): (gradStud**3 / (sigma * 400), sigma / 20, (gradStud / 20)**3),
      (75, 85, 75, 85): (gradStud**2 / sigma**2, (sigma / 20)**2, (gradStud / 20)**2),
      (85, math.inf, 75, 85): (gradStud**3 / (20 * sigma**2), (sigma / 20)**2, (gradStud / 20)**3),
      (85, math.inf, 85, math.inf): (gradStud**3 / sigma**3, (sigma / 20)**3, (gradStud / 20)**3)
    }
    for (gradlb, gradub, sigmalb, sigmaub), (boostDiff, preBoost, postBoost) in boost_dict.items():
      if gradub > gradStud >= gradlb and sigmaub > sigma >= sigmalb:
        return (gradFt, round(boostDiff, 3), round(preBoost, 3), round(postBoost, 3))
    return (gradFt, 0, 0, 0)

  def FtCalc(Section):
    def noInput():
      global error_message
      global infinite_loop

      def LoopTimeAlert(time, loops):
        Error_Collection_Grad.append_row([f"Check loop timed out\nLoops: {loops} loops\nTime: {time}sec", sigma, tau, phi, str(inputs), "N/A", "N/A", "N/A", "N/A", datetime.now().strftime('%Y/%m/%d %H:%M:%S'), False, 'Normal'])
        try:Equations_of_Doom.update_cell(Section, 7, "awaiting input") 
        except:pass

      if attempts >= 50:
        LoopTimeAlert(time_current, attempts)
        error_message += "Potential infinite loop stopped.\nBug report has been sent for inspection.\n"
      elif time_current > 120:
        LoopTimeAlert(time_current, attempts)
        error_message += "Sheet is taking too long to respond. Please contact Baldy about this. It may be due to too much traffic so try again in 10-20minutes.\n"
      infinite_loop=True
      return False

    Equations_of_Doom.update_cell(Section, 7, phi_tau)
    if Section == 12:Equations_of_Doom.update_cell(Section, 4, sigma)
    
    time_start, time_current, calc, attempts = time.time(), 0, False, 0
    while calc == False and attempts < 50 and time_current <=120:
      #check every 0.5 seconds as to not to lag out the api or go past api usage limits
      time.sleep(0.5)
      try:
        calc = float(Equations_of_Doom.cell(col=8, row=Section).value)
        if Section == 12:Equations_of_Doom.update_cell(Section, 4, "awaiting input")
        Equations_of_Doom.update_cell(Section, 7, "awaiting input")
        
        attempts+=1
        break
      except:
        attempts+=1
        time_current = time.time()-time_start 
        continue

    return noInput() if calc==False else finalFt(calc)
      
  gradSection, upperLimits = gradSection(), [int(Equations_of_Doom.cell(col=4+i, row=141).value) for i in range(2)]
  if infinite_loop: finalOutput=""
  else:
    if (phi_tau > upperLimits[0] or sigma > upperLimits[1]):
      finalOutput = f"Values too high and outside range of equations.\nIf you have data to add please fill out https://forms.gle/myog2rNgdmQJqPsP6"
      finalOutput += f"\nCurrent Max Supported phi*tau: e{upperLimits[0]}\nCurrent Max Supported Students: {upperLimits[1]}" 
    elif isinstance(gradSection, str): finalOutput = gradSection
    else:
      Ft = FtCalc(gradSection)
      if isinstance(Ft, str): finalOutput=Ft
      elif Ft == False: finalOutput=""
      elif 2000>Ft[0] or Ft[0]>70000: exception = "Bounds"
      elif Ft[1]==Ft[2]==Ft[3]==0: finalOutput = f"Current Graduation Mark: ee{Ft[0]}"
      else:
        finalOutput = f"Current Graduation Mark: ee{Ft[0]}\nTheory Income Boosted by {Ft[1]}x since last Graduation."
        finalOutput += f"\nTheory Income Before Graduation: {Ft[2]}\nTheory Income After Graduation: {Ft[3]}"

  if finalOutput is None:
    Error_Collection_Grad.append_row([exception, sigma, tau, phi, f'{inputs}', "N/A", f'{Ft}', gradSection, f'{upperLimits}', datetime.now().strftime('%Y/%m/%d %H:%M:%S'), False, 'Normal'])
    return error_message+"An error occured.\nBug report has been sent for inspection.\nContact LE⭐Baldy#2002 or Ayo#8519 on discord or u/LEBAldy2002 on Reddit if this is not resolved quickly."
  else:return error_message+finalOutput

try:
  Gradput=main()
  print(Gradput+"\n")
  Data_Collection_Grad.append_row([sigma, tau, phi, Gradput, datetime.now().strftime('%Y/%m/%d %H:%M:%S'), f'{inputs}'])

except Exception as err:
  Error_Collection_Grad.append_row([f'{err}', sigma, tau, phi, f'{inputs}', "N/A", f'{Ft}', gradSection, f'{upperLimits}', datetime.now().strftime('%Y/%m/%d %H:%M:%S'), False, 'Normal', ''])
  
  print("An error occured.\nBug report will be sent for inspection.\nContact LE⭐Baldy#2002 or Ayo#8519 on discord or u/LEBAldy2002 on Reddit if this is not resolved quickly.")
  con_det=input("If you would like to give contact information to you in the report, then give here ('None' for none).")
  print('Sending error report...')
  
  if con_det not in ('None', 'none'): Error_Collection_Grad.update_cell(Error_Collection_Grad.row_count, 13, con_det)
  if not err: print('Error not saved correctly. Please sent all inputs and/or a screenshot of the console to LE⭐Baldy#2002 or Ayo#8519 on discord or u/LEBAldy2002 on Reddit. Will not be solved otherwise.')
  else: print('Error report sent.')