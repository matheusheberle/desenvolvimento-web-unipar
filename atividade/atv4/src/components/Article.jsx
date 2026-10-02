export default function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.author} - {props.date}</p>
      <figure>
        <img src="/capa.png" alt="Capa GTA VI" />
        <figcaption>Protagonistas no cenário iluminado de Vice City</figcaption>
      </figure>
      <p>{props.content}</p>
    </article>
  );
}