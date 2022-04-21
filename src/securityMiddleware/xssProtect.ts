import xss from 'xss';

export default function xssProtect(html: string) {

  return xss(html);
};