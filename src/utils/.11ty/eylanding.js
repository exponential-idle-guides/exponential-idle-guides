import {remove_char} from '../src/scripts/remove-char.js';

const name_lookup = {
  'index': {name: 'General Guide', path: 'index'},
  'general': {name: 'General Guide', path: 'index'},
  'basics': {name: 'General Guide', path: 'index'},
  '0-2000': {name: '0-2000', path: '0-2000'},
  '1-2000': {name: '0-2000', path: '0-2000'},
  '0-2k': {name: '0-2000', path: '0-2000'},
  '1-2k': {name: '0-2000', path: '0-2000'},
  'introtograd': {name: 'Intro to Grad', path: 'IntroToGrad'},
  '2000-5000': {name: '2000-5000', path: '2000-5000'},
  '2k-5000': {name: '2000-5000', path: '2000-5000'},
  '2000-5k': {name: '2000-5000', path: '2000-5000'},
  '2k-5k': {name: '2000-5000', path: '2000-5000'},
  'theories-1-to-4': {name: 'T1-4', path: 'Theories-1-to-4'},
  't1-4': {name: 'T1-4', path: 'Theories-1-to-4'},
  'theories-5-to-7': {name: 'T5-7', path: 'Theories-5-to-7'},
  't5-7': {name: 'T5-7', path: 'Theories-5-to-7'},
  'theory-8-and-r9': {name: 'T8 & R9', path: 'Theory-8-and-R9'},
  't8-r9': {name: 'T8 & R9', path: 'Theory-8-and-R9'},
  't8r9': {name: 'T8 & R9', path: 'Theory-8-and-R9'},
  'theory-9-to-endgame': {name: 'T9 & Endgame', path: 'Theory-9-to-endgame'},
  't9': {name: 'T9 & Endgame', path: 'Theory-9-to-endgame'},
  't9-to-endgame': {name: 'T9 & Endgame', path: 'Theory-9-to-endgame'},
  'endgame': {name: 'T9 & Endgame', path: 'Theory-9-to-endgame'},
  'ct': {name: 'Custom theories', path: 'CT/Custom-theories'},
  'custom-theories': {name: 'Custom theories', path: 'CT/Custom-theories'},
  'wsp': {name: 'WSP', path: 'CT/wsp'},
  'sl': {name: 'SL', path: 'CT/sl'},
  'ef': {name: 'EF', path: 'CT/ef'},
  'csr2': {name: 'CSR2', path: 'CT/csr2'},
  'fi': {name: 'FI', path: 'CT/fi'},
  'fp': {name: 'FP', path: 'CT/fp'},
  'rz': {name: 'RZ', path: 'CT/rz'},
  'mf': {name: 'MF', path: 'CT/mf'},
  'extensions': {name: 'Extensions', path: 'extensions/extensions'},
  'extension': {name: 'Extensions', path: 'extensions/extensions'},
  'ext': {name: 'Extensions', path: 'extensions/extensions'},
  'stepwise': {name: 'Stepwise variables', path: 'extensions/stepwise'},
  'milestone-swapping': {name: 'Milestone swapping', path: 'extensions/milestones'},
  'milestone-swap': {name: 'Milestone swapping', path: 'extensions/milestones'}
};

export function eylanding($) {
  const remove_unwanted = (s) => remove_char(
    s.replaceAll(String.fromCharCode(0x00ad),"")
      .replaceAll(String.fromCharCode(8203),""),
    String.fromCharCode(10)
  );

  $('.eylanding-link').each(function(_) {
    const s_arr = $(this).text().split(/[,\s]+/).filter((s) => remove_unwanted(s) != "");
    $(this).replaceWith(
      "Eylanding's simplified " + 
      s_arr.map((s) => {
        const l = name_lookup[remove_unwanted(s.toLowerCase())];
        return "<a href='https://guide.eylanding.com/" + l.path + ".html'>" + l.name + "</a>"
      }).join(", ").replace(/,\s(?!.*,\s)/, (s_arr.length > 2 ? "," : "") + " and ") + 
      " guide" + 
      (s_arr.length > 1 ? "s": "")
    )
  });

  return $.html()
}