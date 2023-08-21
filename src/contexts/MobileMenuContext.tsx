import { ReactNode, createContext, useReducer } from 'react';

/* --------------------------------------------------------------- */

interface IState {
  menuOpened: boolean
}

interface IAction {
  type: string,
  payload: boolean;
}

interface IProps {
  children: ReactNode | number | string;
}

interface IHandlers {
  [key: string]: (state: IState, action: IAction) => IState,
}

/* --------------------------------------------------------------- */

const initialState: IState = {
  menuOpened: false,
};

const handlers: IHandlers = {
  SET_MENU_OPENED: (state: IState, action: IAction): IState => {
    return {
      ...state,
      menuOpened: action.payload
    };
  }
};

const reducer = (state: IState, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const MobileMenuContext = createContext({
  ...initialState,
  openMenuAct: () => { },
  closeMenuAct: () => { }
});

//  Provider
function MobileMenuProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openMenuAct = () => {
    dispatch({
      type: 'SET_MENU_OPENED',
      payload: true
    });
  };

  const closeMenuAct = () => {
    dispatch({
      type: 'SET_MENU_OPENED',
      payload: false
    });
  };

  return (
    <MobileMenuContext.Provider
      value={{
        ...state,
        openMenuAct,
        closeMenuAct
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

export { MobileMenuContext, MobileMenuProvider };