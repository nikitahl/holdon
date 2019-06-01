import Counter from '../components/counter'
function Index ({ savedStart }) {
  return <Counter savedStart={savedStart} />
}

Index.getInitialProps = ({ req }) => {
  const data = require('../db/counter.json')
  return { savedStart: data.start }
}

export default Index
