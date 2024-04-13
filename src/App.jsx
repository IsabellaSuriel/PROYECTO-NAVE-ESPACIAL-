

const App = () => {
  return <div>
    <div style={{ padding: '16px', backgroundColor: 'fefefe', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0px 0px 4px rgba(0, 0, 0.08)' }}>
      <div>Daniel Pena</div>
      <div>Fecha</div>
    </div>
    <div style={{ marginTop: '24px', padding: '12px', textAlign: 'center' }}>
      <h1>Mi Página Web</h1>
    </div>
    <div style={{ textAlign: 'center' }}>
      <div>
        <img style={{ borderRadius: '60%' }} alt="Mi foto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWZvWEVsbVKwaIONrfSlePLcwQWYuWwro2L_cfy3jYw&s" />
      </div>
      <div style={{ marginTop: '12px' }}>
        Descripcion
      </div>
    </div>
  </div>
}

export default App;
