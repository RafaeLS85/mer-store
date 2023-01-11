export default function HeaderSection() {

  const styles = {
    background: {
        backgroundImage: `url('/honey3.jpg')`
    },
    title: {
        fontFamily: 'Grandma',
        fontSize: '60px',
        textAlign:'center',
        fontWeight: 'bold',
        whiteSpace:'pre-wrap',
        textTransform: 'uppercase'
    },
    subtitle: {
        fontFamily: 'Europa',
        fontSize: '21px',
        textAlign:'center',
        fontWeight: 'bold',
        whiteSpace:'pre-wrap',
        textTransform: 'uppercase'
    }
  }  

  return (
    <div className="p-12" style={Object.assign(styles.background)}>
      <h1 style={Object.assign(styles.title)}>
        Join our Family &amp; Enjoy Natures Finest
      </h1>
      <p style={{textAlign:'center',whiteSpace:'pre-wrap'}} className="sqsrte-large">
        <strong>NATURALLY PRODUCED HONEY &amp; BEE PRODUCTS</strong>
      </p>
    </div>
  );
}
