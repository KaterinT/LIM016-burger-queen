import '@testing-library/jest-dom';
import { AppRouter } from "../routers/AppRouter";

describe('prueba en <AppRouter />', () => {
  test ('evalua si es una función', () => {
    expect( typeof AppRouter ).toBe('function')
  })
})