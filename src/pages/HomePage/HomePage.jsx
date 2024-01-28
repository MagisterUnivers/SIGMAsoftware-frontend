import styles from './HomePage.module.scss'

export default function HomePage () {
  return (
    <section>
      <div className={styles.home__wrapper}>
        <h1>Привет!</h1>
        <p>
          Знаю, может быть это не интересно читать, но задание было довольно
          интересным. Заранее хотел бы поблагодарить за то,
          что не стали нагружать таской на неделю. И спасибо за предоставленный
          ответ на отзыв, это на будущее.
        </p>
        <p>
          Хочу сказать пару слов про задание. Да, его можно было бы улучшить,
          причем кардинально, роздробить сильнее, но и так хорошо выглядит.
          Стилизацию я уже не смог придумать, перерыл весь
          интернет, глаз ничего не зацепило. Без дизайнеров жить и правда
          трудновато.
        </p>
        <p>
          Может показаться, что в некоторых моментах странные движения по коду,
          не обращайте внимания, иногда я мог написать проще или же сложнее,
          просто полюбил такой синтаксический сахар.
        </p>
        <p>
          Можно было бы напихать еще кучу компонентов. Создать валидацию через сторонние библиотеки, сделать
          отличные анимации. Оформить какой - то рандомный логотип из интернета.
          Сделать респонсив. Добавить спиннер на лоадинг.
          Накидать милларды мета - тегов.
        </p>
        <p>
          Но что есть, то есть. Вот такой вот я ленивый :D
        </p>
        <h2>Приятного хакинга!</h2>
      </div>
    </section>
  )
}
