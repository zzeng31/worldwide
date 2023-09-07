import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../context/CitiesContext";
import CountryItem from "./CountryItem";
const CountryList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return (
      <Message message="Add your first city by clicking an city on the map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);
  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {cities.length > 0 &&
        cities.map((city) => <CountryItem country={city} key={city.id} />)}
    </ul>
  );
};

export default CountryList;
