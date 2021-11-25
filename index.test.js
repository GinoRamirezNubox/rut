import {setRut} from './rut';

describe('rut utils', () => {
  test('debe entregar rut formateado cuando se entregue rut valido con digito verificador distinto a "0" o "K" ', async () => {
    const validRut = '22917307';
    const formattedRut = setRut(validRut);
    expect(formattedRut).toEqual('2.291.730-7');
  });

  test('debe entregar rut formateado cuando se entregue rut valido con digito verificador igual a 0', async () => {
    const validRut = '181025220';
    const formattedRut = setRut(validRut);
    expect(formattedRut).toEqual('18.102.522-0');
  });

  test('debe entregar rut formateado cuando se entregue rut valido con digito verificador igual a K', async () => {
    const validRut = '20454977K';
    const formattedRut = setRut(validRut);
    expect(formattedRut).toEqual('20.454.977-K');
  });

  test('debe entregar rut formateado cuando se entregue rut valido y formateado', async () => {
    const validRut = '20.454.977-K';
    const formattedRut = setRut(validRut);
    expect(formattedRut).toEqual('20.454.977-K');
  });

  test('debe entregar string vacio cuando se entregue rut invalido con digito verificador con letra diferente a K', async () => {
    const validRut = '20454977L';
    const formattedRut = setRut(validRut);
    expect(formattedRut).toEqual('');
  });

  test('debe entregar string vacio cuando se entregue string basura', async () => {
    const validRut = 'qrqewreqwrq';
    const formattedRut = setRut(validRut);
    expect(formattedRut).toEqual('');
  });

  test('debe entregar string vacio cuando se entregue string vacio', async () => {
    const validRut = '';
    const formattedRut = setRut(validRut);
    expect(formattedRut).toEqual('');
  });
});
