import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'lkjakjkd',
      label: 'Can I use React on a project ?',
      content: 'You can use react on any project you want',
    },
    {
      id: 'jsjkkskjdjs',
      label: 'Can I use Javascript on a project ?',
      content: 'You can use react on any project you want',
    },
    {
      id: 'skskksdlld',
      label: 'Can I use CSS on a project ?',
      content: 'You can use react on any project you want',
    },
  ];
  return <Accordion items={items} />;
}
export default App;
