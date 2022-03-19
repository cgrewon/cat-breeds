import React, { createContext, useContext, useEffect } from "react";
import { ApiContextValue } from "../types/api-context-value.type";
import { Cat } from "../types/cat.type";

const HOST: string = "https://api.thecatapi.com/v1/";



export function ApiHooks() {
  const [cats, setCats] = React.useState<Cat[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const [filteredCats, setFilteredCats] = React.useState<Cat[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  async function fetchBreeds(): Promise<Cat[]> {
    setLoading(true);
    return new Promise((resolve, reject) => {
      fetch(HOST + "breeds")
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setCats(json);
          resolve(json);
        })
        .catch((ex) => {
          reject(ex);
          setLoading(false);
        });
    });
  }

  useEffect(()=>{
    setLoading(true);

    if(search){
      const filtered = cats.filter(cat=>{
        return cat.id.includes(search) || 
        cat.name.includes(search) || 
        (cat.cfa_url && cat.cfa_url.includes(search)) || 
        (cat.vetstreet_url && cat.vetstreet_url.includes(search)) || 
        (cat.vcahospitals_url && cat.vcahospitals_url.includes(search) )|| 
        cat.temperament.includes(search) || 
        cat.country_codes.includes(search) || 
        cat.country_code.includes(search) || 
        cat.description.includes(search) || 
        cat.life_span.includes(search) || 
        (cat.indoor+'').includes(search) || 
        (cat.lap + '').includes(search) || 
        (cat.alt_names && cat.alt_names.includes(search)) ||
        (cat.adaptability + '').includes(search) || 
        (cat.affection_level + '').includes(search) || 
        (cat.child_friendly + '').includes(search) || 
        (cat.dog_friendly + '').includes(search) || 
        (cat.energy_level + '').includes(search) || 
        (cat.grooming + '').includes(search) || 
        (cat.health_issues + '').includes(search) || 
        (cat.intelligence + '').includes(search) || 
        (cat.shedding_level + '').includes(search) || 
        (cat.social_needs + '').includes(search) || 
        (cat.stranger_friendly + '').includes(search) || 
        (cat.vocalisation + '').includes(search) || 
        (cat.experimental + '').includes(search) || 
        (cat.hairless + '').includes(search) || 
        (cat.natural + '').includes(search) || 
        (cat.rare + '').includes(search) || 
        (cat.rex + '').includes(search) || 
        (cat.suppressed_tail + '').includes(search) || 
        (cat.short_legs + '').includes(search) || 
        (cat.wikipedia_url && cat.wikipedia_url.includes(search)) || 
        (cat.hypoallergenic + '').includes(search) || 
        (cat.reference_image_id && cat.reference_image_id.includes(search))
      })
      setFilteredCats(filtered);
    } else {
      setFilteredCats(cats);
    }
    setLoading(false);
  }, [search, cats])

  useEffect(() => {
    (async () => {
      await fetchBreeds();
    })();
  }, []);

  return { cats, filteredCats, loading, search, setSearch };
}



export const ApiContext: React.Context<ApiContextValue> = createContext({
  cats: [],
  filteredCats: [],
  loading: false,
  search: '',
  setSearch: undefined
} as ApiContextValue);

export const ApiProvider = ({ children }: React.PropsWithChildren<any>) => {
  const value = ApiHooks();
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => useContext(ApiContext);
