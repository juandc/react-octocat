import React from 'react'
import { Link } from 'react-router'
// Random Images
import images from '../RandomImages'

function getRandomImage(imgList) {
  const imgNum = Math.floor(Math.random() * imgList.length)
  const img = imgList[imgNum]
  return [img, imgNum]
}

function Repo(props) {
  const RandomImage = getRandomImage(images)
  return (
    <article
      name={`repo-${props.id}`}
      className={`CardRepository CardRepository-${RandomImage[1]}`}
    >
      <div
        className="RandomImage"
        style={{
          backgroundImage: `url(${RandomImage[0]})`,
        }}
      />
      <h3 className="CardRepository-title">
        <Link to={`/repos/${props.owner.login}/${props.name}`}>
          {props.name}
        </Link>
      </h3>
      <p className="CardRepository-description">{props.description}</p>
      <div className="CardRepository-footer">
        <span>
          <i className="fa fa-user-o" />
          <Link to={`/user/${props.owner.login}`}>{props.owner.login}</Link>
        </span>
        <span><i className="fa fa-star" /> {props.stargazers_count}</span>
      </div>
    </article>
  )
}

Repo.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  owner: React.PropTypes.shape({
    login: React.PropTypes.string,
  }),
  description: React.PropTypes.string,
  stargazers_count: React.PropTypes.number,
}

export default Repo
