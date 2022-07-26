import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";

export const PokemonCard = ({name}) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
          alt='Ditto' />}
        extra={<StarOutlined />}
    >
      <Meta description='fire, magic' />
    </Card>
  );
};
