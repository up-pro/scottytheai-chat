import { Suspense } from "react"
import { ThemeProvider, createTheme } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { lineaTestnet } from "viem/chains"
import { w3mConnectors, EthereumClient } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { ToastContainer } from "react-toastify"
import LoadingForSuspense from "./components/LoadingForSuspense";
import Routes from "./Routes"
import { LoadingProvider } from "./contexts/LoadingContext"

//  --------------------------------------------------------------------------------------

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FD7C1E'
    }
  },
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 18
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: 'white'
        }
      }
    }
  }
})

const projectId = import.meta.env.VITE_PROJECT_ID || ''
const { chains, publicClient, webSocketPublicClient } = configureChains([lineaTestnet], [publicProvider()])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
  webSocketPublicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

//  --------------------------------------------------------------------------------------

function App() {
  return (
    <Suspense fallback={<LoadingForSuspense />}>
      <WagmiConfig config={wagmiConfig}>
        <ThemeProvider theme={theme}>
          <LoadingProvider>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </LoadingProvider>
        </ThemeProvider>
      </WagmiConfig>
      <ToastContainer />
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </Suspense>
  )
}

export default App
