export function RepositoryItem(props) {
  return (
    <li style={{paddingBottom: '16px'}}>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.url}>Access repository</a>
    </li>
  )
}
