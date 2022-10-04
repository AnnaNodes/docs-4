import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import { DyteButton } from '@dytesdk/react-ui-kit';
//import useGoogleAnalytics from './useAnalyticshooks'


import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';
import {
  APIReferenceIcon,
  TerminalIcon,
  IDEIcon,
  ModulesIcon,
  RelayerIcon,
  AssetIcon,
  Telescope,
  Osmojs,
  Createapp,
  Cosmoskit,
  Tscodegen,
  KeysIcon,
  Transaction,
  OsmosisCore,
  Contribute,
} from '../icons';
import GuidesSection from '../components/GuidesSection';

export default function Homepage() {
  const router = useHistory();
  return (
    <Layout
      description="The Osmosis blockchain is a decentralized network, ran by 100+ validators and full nodes, with many front-ends and development teams on it. 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div className='margin-bottom--lg'>
            <h2>Osmosis Docs</h2>
            <p>
            The Osmosis blockchain is a decentralized network, ran by 100+ validators and full nodes, with many front-ends and development teams on it. Explore our docs and examples to quickly learn, develop & integrate with the Osmosis blockchain.
            </p>
            <DyteButton onClick={() => router.push('/osmosis-core/')}>
              Get Started &rarr;
            </DyteButton>
          </div>


          <div className='margin-bottom--lg'>
            <h1>🇨🇴 HackWasm Medellin</h1>
            <p>Join us for the first Hackwasm ever made in Medellín city! This hackathon is your chance to network with incredible people and work with some of the best developers in the Cosmos ecosystem and helping them to solve real problems.</p>
          <DyteButton onClick={() => router.push('/cosmwasm/hackwasm')}>Resources</DyteButton>
          </div>
            
  

          <Section title="Learn about Osmosis">
            <Card
              title="What is Osmosis?"
              description="Osmosis is an advanced automated market maker (AMM) protocol that allows developers to build customized AMMs with sovereign liquidity pools."
              to="/overview/"
            />
            <Card
              title="How to use the Osmosis Dex"
              description="Learn about how to swap, provide liquidity and more."
              to="/overview/getting-started"
            />
            <Card
              title="The OSMO Token"
              description="The OSMO token is a governance token that allows staked token holders to decide the future of the protocol, including every implementation detail. "
              to="/overview/getting-started"
            />
          </Section>

          <Section title="Developers" id="web-sdks" hasSubSections>
            <Section
              title="⚙️ Chain Development"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  Everything that is needed to learn about the Osmosis core chain development. 
                </>
              }
            >
             

             <Card
    title="Build and Test Osmosis Source Code"
    description="Getting started with building and testing Osmosis codebase"
    to="/osmosis-core/build"
    icon={<OsmosisCore />}
  />
  <Card
    title="IDE Setup"
    description="Recommended IDE setup for developing on Osmosis in Go"
    to="/osmosis-core/ide-guide"
    icon={<IDEIcon />}
  />
  <Card
    title="Osmosisd CLI"
    description="Install osmosisd to join the network or simple query it."
    to="/osmosis-core/osmosisd"
    icon={<TerminalIcon />}
    svgFile="/icons/cli.svg"
  />
  <Card
    title="Modules"
    description="Osmosis modules and their respective CLI commands"
    to="/osmosis-core/modules"
    icon={<ModulesIcon />}
    svgFile="/icons/modules.svg"
  />
  <Card
    title="Relaying"
    description=" Relay IBC packets between Osmosis and other chains"
    to="/osmosis-core/relaying"
    icon=""
    svgFile="/icons/relayer.svg"
  />
  <Card
    title="Assets"
    description="     Currently supported assets on Osmosis with their corresponding channels and IBC denoms."
    to="/osmosis-core/asset-info"
    icon={<AssetIcon />}
  />
  <Card
    title="Key Management"
    description="Managing keys via CLI and advanced operations such as multisig wallets"
    to="/osmosis-core/category/keys-management"
    icon={<KeysIcon />}
  />
  <Card
    title="Transaction Structure"
    description=" Understanding the structure of a transaction on the Osmosis blockchain"
    to="/osmosis-core/guides/structure"
    icon={<Transaction />}
    svgFile="/icons/transaction.svg"
  />
  <Card
    title="Contributing"
    description=" Guidelines to contributing to Osmosis core development."
    to="/osmosis-core/contributing"
    icon={<Contribute />}
    svgFile="/icons/octocat.svg"
  />

            </Section>
          </Section>

    
   <Section title="Frontend Libraries & Utilities" id="front-end">
    <Card
    title="OsmoJS"
    description="Compose and broadcast Osmosis and Cosmos messages, with all of the proto and amino encoding handled for you."
    to="/osmojs"
    icon={<Osmojs />}
    svgFile="/icons/osmojs.svg"
  />

<Card
    title="Cosmos Kit"
    description="A wallet adapter for react with mobile WalletConnect support for the Cosmos ecosystem."
    to="https://github.com/cosmology-tech/cosmos-kit"
    icon=""
    svgFile="/icons/bag.svg"
  />

  <Card
    title="Telescope"
    description="TypeScript Transpiler for Cosmos Protobufs. Telescope is used to generate libraries for Cosmos blockchains."
    to="/telescope"
    svgFile="/icons/telescope.svg"
  />

<Card
    title="Create Cosmos App"
    description="Set up a modern Cosmos app by running one command"
    to="https://github.com/cosmology-tech/create-cosmos-app"
    icon={<Createapp />}
    svgFile="/icons/create-cosmos-app.svg"
  />



 <Card
    title="Chain Registry"
    description="The npm package for the Official Cosmos chain registry"
    to="https://github.com/cosmology-tech/chain-registry"
    icon={<Cosmoskit />}
    svgFile="/icons/registry.svg"
  />

  <Card
    title="TS Codegen"
    description="The quickest and easiest way to interact with CosmWasm Contracts"
    to="https://github.com/CosmWasm/ts-codegen"
    icon={<Tscodegen />}
    svgFile="/icons/tscodegen.svg"
  />   
 
  </Section>


          <Section title="🛠 Tools">
            <Card
              title="Osmosisd CLI"
              description="A command line tool to get things done quick!"
              to="/osmosis-core/osmosisd"
              icon={<TerminalIcon />}
              svgFile="/icons/cli.svg"
            />
          </Section>

          <Section title="📜 API Reference">
            <Card
              title="API Reference"
              description="Osmosis RPC and LCD API Reference"
              to="/api/"
              icon={<APIReferenceIcon />}
            />
          </Section>

        </div>
      </div>
    </Layout>
  );
}
