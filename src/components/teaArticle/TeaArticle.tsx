import { TeaHardcoded } from '../../utils/interface';
import { NavLink } from "react-router-dom";
import './TeaArticle.css';

interface Props {
  tea: TeaHardcoded,
  slug: string,
  key: number,
}

function TeaArticle({ tea, slug, key }: Props) {
  let type = tea.type[0].toUpperCase() + tea.type.slice(1)

  return (
    <div className='tea-article' id={`${slug}`}>
      <h1>{type}</h1>
      <p>{tea.summary}</p>
      <p>{tea.creation}</p>
      <p>{tea.withering}</p>
      <p>{tea.rolling}</p>
      <p>{tea.oxidation}</p>
      <p>{tea.heating}</p>
      <p>{tea.climate}</p>
        <div className='buttons'>
        <button className="infoButton go-back">
          <NavLink to='/'>⃪ Go back</NavLink>
        </button>
        <button className="infoButton">
          <NavLink to={`/tea/${slug}`}>See {type} teas →</NavLink>
        </button>
        </div>
    </div>
  )
}

export default TeaArticle