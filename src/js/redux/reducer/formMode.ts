export type FormMode = {
    "buttons":boolean,
    "checkboxes":boolean,
    "radioboxes":boolean,
    "selectors":boolean,
    "selectorRadio":boolean,
    "textboxes":boolean,
    "loading":boolean
};

export type ModeKeys = keyof FormMode;

const initFormMode:FormMode = {
    buttons:true,
    checkboxes:false,
    radioboxes:false,
    selectors:false,
    selectorRadio:false,
    textboxes:false,
    loading:false
}

export type FormModeAction = {prop:ModeKeys,type:"formMode_check",checked:boolean};

type FormReducer = (state:FormMode,action:FormModeAction)=>FormMode;

export const formMode:FormReducer = (state=initFormMode,action)=>{
    switch(action.type){
        case "formMode_check":
            Object.keys(state).forEach(key=> state[key]=false);
            state[action.prop] = action.checked;
            return {...state};

        default:
            return state;
    }
}