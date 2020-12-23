import { store } from "@elonbezos/vengarljs";

store.createGlobalState({ msgScore: null })
 
export default store.getGlobalState();