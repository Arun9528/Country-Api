import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type flagsProps = {
    svg:string;
    png:string;
    alt:string;
}
type currenciesProps = {
    [currencyCode:string]:{name:string}
}
type languagesProps = {
    [lanugageCode:string]:string
}
export interface countryProps{
   name:{common:string};
   capital:string[];
   languages:languagesProps;
   flags:flagsProps;
   region:string;
   population:number;
   nativeName:string;
   subregion:string;
   borders:string[];
   currencies:currenciesProps;
   area:number;
   cca3:string;
}
interface initialStateProps{
    data:countryProps[];
    regionValue:string;
    countryName:string;
}
const initialState:initialStateProps = {
    data:[],
    regionValue:"",
    countryName:'',
}
export const countrydataSlice = createSlice({
    name:"countryData",
    initialState,
    reducers:{
        addCountryData:(state,action:PayloadAction<countryProps[]>)=>{
            state.data = action.payload
        },
        addRegionValue:(state,action:PayloadAction<string>)=>{
            state.regionValue = action.payload
        },
        searchCountryName:(state,action:PayloadAction<string>)=>{
            state.countryName = action.payload
        },
    }
});
export const {addCountryData,searchCountryName,addRegionValue} = countrydataSlice.actions;
export default countrydataSlice.reducer;