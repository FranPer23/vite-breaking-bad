
import { reactive } from "vue";

export const store = reactive({
  error:"",
  loading: false,
  appName:"Yu-Gi-Ho API",
  cards: [],
  apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  selectedArchetype:""
});
