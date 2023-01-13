export default function ShopButton(){
    return (
        <div className="flex justify-center m-14">
            <button style={{
                    fontFamily: 'Europa',
                    fontSize: '20px',
                    backgroundColor: '#553605', 
                    fontWeight: 'bold',
                    color: 'white', 
                    padding: '1em 1.67em', 
                    borderRadius: '30px',                     
                    }}
                    onClick={() => console.log('click')}   
                >
            SHOP ONLINE
        </button>
        </div>
    )
}