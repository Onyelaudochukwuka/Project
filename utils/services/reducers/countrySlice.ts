import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CountryState {
    state?: string;

}

// Define the initial state using that type
const initialState: CountryState = {
    state: "ottawa",

}

 const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        selectCountry(state: CountryState, action: PayloadAction<CountryState>) {
            state.state = action.payload.state;
            // state.town = action.payload.town;
        },
    }
})

export const { selectCountry } = countrySlice.actions;

export default countrySlice;