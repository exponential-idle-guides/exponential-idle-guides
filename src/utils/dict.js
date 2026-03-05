(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.dictUtils = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  function copy_dict(dict, f) {
    return Object.keys(dict).reduce((a,v) => ({...a, [v]: f(dict, v)}), {});
  }

  function gt_dict(dict, val){
    const arr = dict.indexes;
    if (Math.min(...arr) > val){
      return copy_dict(dict, (d,k) => d[k].slice());
    } else if (Math.max(...arr) < val) {
      return copy_dict(dict, (d,k) => []);
    }
    const i = arr.findIndex((e) => e > val);
    return copy_dict(dict, (d,k) => d[k].slice(i));
  }

  function lt_dict(dict, val){
    const arr = dict.indexes;
    if (Math.max(...arr) < val || val === undefined){
      return copy_dict(dict, (d,k) => d[k].slice());
    } else if (Math.min(...arr) > val) {
      return copy_dict(dict, (d,k) => []);
    }
    const i = arr.length - [...arr].reverse().findIndex((e) => e < val);
    return copy_dict(dict, (d,k) => d[k].slice(0,i));
  }

  function zip() {
    const args = [].slice.call(arguments);
    const shortest = args.length==0 ? [] : args.reduce(function(a,b){
        return a.length<b.length ? a : b
    });

    return shortest.map(function(_,i){
        return args.map(function(array){return array[i]})
    });
  }

  function zip_idi(dict) {
    return zip(dict.ids, dict.indexes);
  }

  return {
    copy_dict,
    gt_dict,
    lt_dict,
    zip,
    zip_idi
  };
}));
