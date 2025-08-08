import {popmocktailLists} from "../../constants/index.js";
import {lovemockTailLists} from "../../constants/index.js";

const Mocktails = () => {
    return (
        <section id="mocktails" className="noisy">
            <img src="/images/mocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/mocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most popular mocktails:</h2>

                    <ul>
                        {popmocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="loved">
                    <h2>Most loved mocktails:</h2>

                    <ul>
                        {lovemockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </section>
    );
};

export default Mocktails;