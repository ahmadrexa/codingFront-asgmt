import { useEffect, useState } from "react";
import DefaultLayout from "../../components/layout/defaultLayout";
import api from "../../utils/api";

export function Home(){
  const [loading, setLoading] = useState(false);
  const [assets, setAssets] = useState([]);
  useEffect(function(){
    async function getApi(){
      try{
        setLoading(true);
        const response = await api.get('assets');
        console.log(response);
        setAssets(response.data.data);
        setLoading(false);
      }catch(e){
        setLoading(false);

      }
    }
    getApi();
  },[])
  function renderFarm(){
    return assets.map(function(item){
      return(
        <li key={item.id}> {item.id}</li>
      )
    })
  
  }
    return (
      <DefaultLayout>
        <div style= {{display: loading ? "block": "none"}}>loading</div>
          <p> home </p>
          <ul>
          {renderFarm()}
          </ul>
      </DefaultLayout>
    )
}
export default Home;