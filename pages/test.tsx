import NavBarCard from "../components/Layout/NavBarCard/NavBarCard"
import NotesIntroCard from "../components/NotesIntroCard/NotesIntroCard"
import NotesIntroCardHeading from "../components/NotesIntroCard/NotesIntroCardHeading"
import NotesIntroCardSummary from "../components/NotesIntroCard/NotesIntroCardSummary"
import NotesIntroCardTag from "../components/NotesIntroCard/NotesIntroCardTag"
import homeSVG from '../public/home.svg';

function Test() {
  return (
    <div>
      <div>
        <h1>This is a test page</h1>
        <p>Test the individual components here</p>
      </div>
      <br />
      <br />
      <h1>Notes introduction Card</h1>
      <NotesIntroCard>
        <NotesIntroCardHeading>Typescript and Set Theory</NotesIntroCardHeading>
        <NotesIntroCardSummary>
          How does set theory help to understand type assignability and
          resolution in Typescript?
        </NotesIntroCardSummary>
        <NotesIntroCardTag>#typescript</NotesIntroCardTag>
      </NotesIntroCard>
      <br />
      <br />
      <h1>Nav bar cards</h1>
      <NavBarCard items={{
        icon: homeSVG,
        name: 'Test',
        route: '',
      }}></NavBarCard>
    </div>
  )
}

export default Test
