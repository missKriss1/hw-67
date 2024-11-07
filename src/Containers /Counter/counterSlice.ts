import {createSlice} from "@reduxjs/toolkit";

interface DoorState {
    value: string;
    message: string;
    color: string;
}

const initialState: DoorState = {
    value: '',
    message: '',
    color: 'white',
};

const passwordDoor = '1234';

export const doorSlice = createSlice({
    name : "counter",
    initialState,
    reducers: {
        password: (state, action) =>{
            if(state.value.length < 4){
                state.value += action.payload;
            }
        },
        checkpaswordDoor:(state) =>{
            if(state.value === passwordDoor ){
                state.message = "Access Crated";
                state.color = "green";
            }else{
                state.message = "Access Denied";
                state.color = "red";
            }
        },
        deleteNumberPassword: (state) =>{
            state.value = state.value.slice(0,-1);
        }

    }
});

export const doorReduser = doorSlice.reducer;

export const {password, checkpaswordDoor, deleteNumberPassword} = doorSlice.actions;