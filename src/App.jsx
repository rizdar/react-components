import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button className="mb-5" success onClick={() => console.log('Click..!!')}>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal</Button>
      </div>
      <div>
        <Button danger>
          <GoCloudDownload />
          Hide ads
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoDatabase />
          Secondary
        </Button>
      </div>
    </div>
  );
}

export default App;
