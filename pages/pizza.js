import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Pizza(props) {
  const pizzaToppings = props.toppings;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          My Favorite Pizza Toppings
        </h1>
        <ul className="toppings">
            {pizzaToppings.map((topping) => {
                return <li key={topping}>{topping}</li>;
            })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
    const pizzaToppings = [
        "Pineapple",
        "Ham",
        "Pepperoni",
        "Jalapeno",
        "Green Peppers"
    ];

    return {
        props: {
            toppings: pizzaToppings,
        }
    };
}