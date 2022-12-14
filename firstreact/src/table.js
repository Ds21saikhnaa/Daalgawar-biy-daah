function Board() {

    return (
      <div className="App">
        <header className="App-header">
            <div style={{display:'flex', flexDirection:'column'}}>
            {
                Array(10).fill(0).map(() => {
                  return <div style={{display: 'flex'}}>
                    {
                      Array(10).fill(0).map(() => {
                        return <div style={{
                          width: '50px',
                          height:'50px',
                          border: '1px solid black'
                        }}></div>
                      })
                    }
                  </div>
                })
              }
            </div>
        </header>
      </div>
    );
  }
  export {
     Board
    }