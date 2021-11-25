const cleanRut = (dirtyRut: string) => {
    return dirtyRut.replace(/([.\-])/g, '');
  };
  
  const getCheckLastDigit = (rut: string): string => {
    let mul, sum;
    sum = 0;
    let i = rut.length;
    mul = 2;
    while (--i >= 0) {
      sum += mul * Number(rut.charAt(i));
      if (++mul === 8) {
        mul = 2;
      }
    }
    const res = sum % 11;
  
    if (res === 1) {
      return 'K';
    } else if (res === 0) {
      return '0';
    } else {
      return String(11 - res);
    }
  };
  
  const validate = (rut: Rut): boolean => {
    if (!/(\d|k)/i.test(rut.lastDigit)) {
      return false;
    }
    const checkDigit = getCheckLastDigit(rut.body);
  
    return checkDigit.toLowerCase() === rut.lastDigit.toLowerCase();
  };
  
  const formatBodyRut = (rut: string): string => {
    return rut
      .split('')
      .reverse()
      .reduce((a, b, i) => {
        return i % 3 === 0 ? b + '.' + a : b + '' + a;
      });
  };
  
  const getPrettyRut = (rut: Rut): string => {
    return formatBodyRut(rut.body) + '-' + rut.lastDigit.toUpperCase();
  };
  
  interface Rut {
    body: string;
    lastDigit;
  }
  
  export const setRut = (rawRut: string): string => {
    const _rut: Rut = {
      body: cleanRut(rawRut.substring(0, rawRut.length - 1)),
      lastDigit: rawRut.substring(rawRut.length - 1).toUpperCase(),
    };
  
    if (validate(_rut)) {
      return getPrettyRut(_rut);
    } else {
      return '';
    }
  };
  