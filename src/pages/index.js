import Container from '@/components/view-container'
import NavList from '@/components/navlist'
import { LOCALDOMAIN } from "utils"
import { reducer, ReducerContext } from 'utils/reducer'
import { useReducer } from 'react'

function Index({ articles, sidebar, labels }) {
  let arr = [];
  for (let k in articles) {
    arr[+k] = articles[k];
  }
  //reducer初始state
  const defaultState = {
    articles: arr,
    labels,
    sidebar,
    subArt: arr
  }
  //reducer+context 实现集中管理
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <ReducerContext.Provider value={
      {
        state,
        dispatch
      }}>
      <NavList />
      <Container />
    </ReducerContext.Provider>
  )
}

export async function getServerSideProps(context) {
  const articleProps = await fetch(`${LOCALDOMAIN}/api/article`)
    .then(data => data.json());
  const sidebarProps = await fetch(`${LOCALDOMAIN}/api/sidebar`)
    .then(data => data.json());
  const labelProps = await fetch(`${LOCALDOMAIN}/api/label`)
    .then(data => data.json());

  return {
    props: {
      articles: articleProps,
      sidebar: sidebarProps,
      labels: labelProps
    }
  }
}

export default Index
