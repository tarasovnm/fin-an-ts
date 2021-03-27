import { createContext } from 'react';
import { IBalanceContextInterface } from './interfaces';

export const BalanceContext = createContext<IBalanceContextInterface | null>(null);