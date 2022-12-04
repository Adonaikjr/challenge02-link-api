import {
  ContainerApp,
  ContainerMain,
  Section,
  BackgroundImage,
  ContentMain,
  ContainerArticle,
  ContentArticle,
  ContainerAside,
  ContentAside,
  SectionContentAside,
  ContainerComponentCard,
  NewContentArticle,
} from './styled'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import imgCard from '../images/icon-brand-recognition.svg'
import imgCardTree from '../images/icon-fully-customizable.svg'
import imgCardTwo from '../images/icon-detailed-records.svg'
import { useState } from 'react'
import { api } from '../service/api'
import { PreviewLink } from '../components/previewLink'
import { ButtonVisible } from '../components/ButtonVisible'

export function App() {
  const [link, setLink] = useState('')
  const [data, setData] = useState('')
  const [button, setButton] = useState<any>()

  const checkLink = () => {
    if (link === '') {
      return alert('preencha os campos')
    }
  }

  const handleSubmitLink = (e: any) => {
    e.preventDefault()
    checkLink()
    api
      .get('/shorten', {
        params: {
          url: link,
        },
      })
      .then((response) => {
        setData(response.data.result.full_short_link)
        setButton(
          <ButtonVisible
            title="copy"
            onClick={() => {
              navigator.clipboard.writeText(
                response.data.result.full_short_link,
              )
            }}
          />,
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <ContainerApp>
      <Header />
      <ContainerMain>
        <ContentMain>

          <Section>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </Section>

          <BackgroundImage />

        </ContentMain>

        <ContainerArticle>
          <ContentArticle>
            <form>
              <input
                onChange={(e) => setLink(e.target.value)}
                type="text"
                placeholder="Shorten a link here..."
              />
              <button onClick={handleSubmitLink}>Shorten it!</button>
            </form>
          </ContentArticle>
        </ContainerArticle>

        <ContainerAside>
          <PreviewLink data={data} link={link}>
            <button
              style={{ border: 'none' }}
              onClick={() => toast('copied to clipboard')}
            >
              {button}
            </button>
          </PreviewLink>

          <ContentAside>
            <SectionContentAside>
              <h1>Advanced Statistics</h1>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </SectionContentAside>
          </ContentAside>

          <ContainerComponentCard>
            <div>
              <Card
                title="Brand Recognition"
                text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
                img={<img src={imgCard} alt="img" />}
              />
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Card
                title="Detailed Records"
                text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                img={<img src={imgCardTwo} alt="img" />}
              />
            </div>
            <div style={{ marginTop: '4rem' }}>
              <Card
                title="Fully Customizable"
                text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                img={<img src={imgCardTree} alt="img" />}
              />
            </div>
          </ContainerComponentCard>

        </ContainerAside>
      </ContainerMain>

      <NewContentArticle>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </NewContentArticle>

      <Footer />
    </ContainerApp>
  )
}
