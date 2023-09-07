import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "../components/Spinner";
import CityItem from "./CityItem";
import { useCities } from "../context/CitiesContext";
const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (cities.length === 0)
    return (
      <Message message="Add your first city by clicking an city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.length > 0 &&
        cities.map((city) => <CityItem city={city} key={city.id} />)}{" "}
    </ul>
  );
};

export default CityList;
