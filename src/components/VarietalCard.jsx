
export default function VarietalCard(props){
    const {name,sunlight,water,humidity,toxicity,temperature} = props;
    return(
        <div>
            <h1>{name}</h1>
            <h2>Sunlight</h2>
            <div>{sunlight}</div>
            <h2>Water</h2>
            <div>{water}</div>
            <h2>Humidity</h2>
            <div>{humidity}</div>
            <h2>Toxicity</h2>
            <div>{toxicity}</div>
            <h2>Temperature</h2>
            <div>{temperature}</div>
        </div>
    )
}