import styles from './Home.module.css'

function Home() {

    function primaryRequest() {
      
      fetch('https://opentdb.com/api.php?amount=30&category=15').then(questao=> questao.json()
      .then(dados=>{
  
                   var questao = document.querySelector("#questao")
                   var dificuldade = document.querySelector("#dificuldade")
                   questao.innerHTML = `${dados.question}`
                   dificuldade.innerHTML = `${dados.difficulty}`
  
      }))
  }
  
  primaryRequest()

 return (
        <>
    <section className={styles.home}>
    <div className={styles.apresentacao}>

<div>
        <button id="botao" className={`${styles.btn} ${styles.btn_red}`}>clique aqui</button>
    </div>
    <div>
            <h1 id="questao">olá</h1>
            <h3 id="questao">olá</h3>
            
    </div>

</div>

</section>
    </>
  )
}

export default Home
