import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex, Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import {BsHeart, BsPerson, BsTools} from "react-icons/bs";
import React from "react";
import {IoSchoolOutline} from "react-icons/io5";
import enLang from './languages/en-us.ts';
import ptLang from './languages/pt-br.ts';

function Home() {

  const language = navigator.language.split('-')[0];
  const lang = language === 'pt' ? ptLang : enLang;

  const experience = [
    {
      company: 'Descomplica',
      role: lang.experience["Descomplica"].role,
      startDate: new Date('2022-01-17'),
      endDate: new Date('2023-02-09'),
      current: false,
      description: lang.experience.Descomplica.description,
      skills: ['Java', 'Spring Boot', 'React', 'NodeJS'],
      avatar: 'https://media.licdn.com/dms/image/C4D0BAQFZWLAFEOhH3Q/company-logo_200_200/0/1632513981925/descomplica_logo?e=1712793600&v=beta&t=y4hBNkzeiGsj9_dRvlZqnVhN2S6G_nDaEL4XRC7zr1Q'
    },
    {
      company: 'JN Moura',
      role: lang.experience["JN Moura"].role,
      startDate: new Date('2023-05-01'),
      current: true,
      description: lang.experience["JN Moura"].description,
      skills: ['C#', '.NET Core', 'React', 'NodeJS'],
      avatar: 'https://media.licdn.com/dms/image/C4D0BAQH07tEjLpo7AQ/company-logo_200_200/0/1630480248385/jnmoura_logo?e=1712793600&v=beta&t=qkVEZnVR7tm7cY9veXaK4TOCB7x-PnSAJ22EivNxcJk'
    }
  ]

  const skills = [
    {
      name: 'Github',
      since: new Date('2018-06-01'),
      description: lang.skills["Github"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
    },
    {
      name: 'Java',
      since: new Date('2018-06-01'),
      description: lang.skills["Java"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
    },
    {
      name: 'React',
      since: new Date('2020-03-01'),
      description: lang.skills["React"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
    },
    {
      name: 'NodeJS',
      since: new Date('2020-03-01'),
      description: lang.skills["NodeJS"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'TypeScript',
      since: new Date('2022-02-01'), //verify
      description: lang.skills["TypeScript"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg'
    },
    {
      name: 'Jest',
      since: new Date('2022-02-01'), //verify
      description: lang.skills["Jest"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg'
    },
    {
      name: 'Nginx',
      since: new Date('2022-02-01'), //verify
      description: lang.skills["Nginx"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg'
    },
    {
      name: 'AWS',
      since: new Date('2022-02-01'), //verify
      description: lang.skills["AWS"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg'
    },
    {
      name: 'GraphQL',
      since: new Date('2022-02-01'), //verify
      description: lang.skills["GraphQL"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg'
    },
    {
      name: 'MongoDB',
      since: new Date('2020-03-01'), //verify
      description: lang.skills["MongoDB"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'PostgreSQL', //verify
      since: new Date('2020-03-01'),
      description: lang.skills["PostgreSQL"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'Redis', //verify
      since: new Date('2020-03-01'),
      description: lang.skills["Redis"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg'
    },
    {
      name: 'Linux',
      since: new Date('2018-06-01'),
      description: lang.skills["Linux"].description,
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg'
    },
  ]

  const personalProjects = [
    {
      name: 'Bezouro',
      description: lang.personalProjects["Bezouro"].description,
      techs: ['React', 'TypeScript', 'ChakraUI', 'Vite'],
      url: 'https://bezouro.com.br/',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
    },
    {
      name: 'CloudScript',
      description: lang.personalProjects["CloudScript"].description,
      techs: ['NodeJS', 'React', 'TypeScript', 'ChakraUI', 'Docker', 'MongoDB'],
      url: 'https://stg.cloudscript.cloud/',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'CloudMC',
      description: lang.personalProjects["CloudMC"].description,
      techs: ['Java', 'NodeJS', 'MongoDB', 'React', 'TypeScript', 'MaterialUI', 'Docker', 'SocketIO', 'Redis'],
      url: 'https://cloudmc.com.br/',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
    },
    {
      name: 'Nubank.TS',
      description: lang.personalProjects["Nubank.TS"].description,
      techs: ['TypeScript', 'NodeJS', 'jest'],
      url: 'https://github.com/Bezouro/nubank.ts',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
    }
  ]

  const aboutMe = [
    {
      title: lang.aboutMe["Bruno Bezouro"].title,
      description: lang.aboutMe["Bruno Bezouro"].description,
      icon: BsPerson,
    },
    {
      title: lang.aboutMe["Computer Engineering"].title,
      description: lang.aboutMe["Computer Engineering"].description,
      icon: IoSchoolOutline,
    },
    {
      title: lang.aboutMe["Technology Enthusiast"].title,
      description: lang.aboutMe["Technology Enthusiast"].description,
      icon: BsHeart,
    },
    {
      title: lang.aboutMe["DIY Enthusiast"].title,
      description: lang.aboutMe["DIY Enthusiast"].description,
      icon: BsTools,
    },
  ]

  const formatDate = new Intl.DateTimeFormat(navigator.language, { year: 'numeric', month: 'long' }).format

  const tabSelectedStyle = { color: 'white', bg: '#3fbafe' }
  const scrollBarStyle = {
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      border: 'solid 4px #0000003a',
    },
  };

  //command to seg git repo: git remote set-url origin

  return (
    <Center w='100vw' h='100vh'>
      <Box
        mt='64px'
        w='600px'
        h='700px'
        bg='#000000cc'
        backdropFilter='blur(10px)'
        p='16px'
        borderRadius='30px'
        position='relative'
      >
        <Box
        position='absolute'
        top='-84px'
        left='calc(50% - 50vw)'
        w='100vw'
        h='140px'
        backgroundImage='linear-gradient(to right, #4facfe 0%, #00f2fe 100%)'
        backdropFilter='blur(10px)'
        clipPath='circle(75px at 50% 64px)'
      >
        <Avatar
          left='calc(50% - 64px)'
          width='128px'
          height='128px'
          name='Rafael'
          src='https://avatars.githubusercontent.com/u/15256984?v=4'
        />
      </Box>
        <Flex mt='46px' color='#FFF' height='calc(100% - 64px)' alignItems='center' flexDir='column'>
          <Text fontSize='2em'>Bruno Bezouro</Text>
          <Text fontSize='1em'>contact@bezouro.com.br</Text>
          <Text fontSize='1em'>Software Engineer</Text>
          <Text fontSize='1em'>São Paulo - SP</Text>

          <Divider w='100%' mt='16px' mb='16px' />

          <Box w='100%'>
            <Tabs variant='soft-rounded' colorScheme='blue'>
              <TabList>
                <Tab _selected={tabSelectedStyle} color='#01f1fe' mr='8px' _focus={{outline: 0}}>{lang.aboutMe.tab}</Tab>
                <Tab _selected={tabSelectedStyle} color='#01f1fe' mr='8px' _focus={{outline: 0}}>{lang.experience.tab}</Tab>
                <Tab _selected={tabSelectedStyle} color='#01f1fe' mr='8px' _focus={{outline: 0}}>{lang.skills.tab}</Tab>
                <Tab _selected={tabSelectedStyle} color='#01f1fe' mr='8px' _focus={{outline: 0}}>{lang.personalProjects.tab}</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box overflowY='scroll' h='411px' css={scrollBarStyle}>
                    {aboutMe.map((item, index) => (
                      <Flex key={index} mt='18px' alignItems='center'>
                        <Box minWidth='64px' height='64px' color='#3fbafe'>
                          {React.createElement(Icon, { as: item.icon, width: '48px', height: '48px'})}
                        </Box>
                        <Flex flexDir='column' ml='16px'>
                          <Text fontSize='1em' fontWeight='bold'>{item.title}</Text>
                          <Text fontSize='0.9em'>{item.description}</Text>
                        </Flex>
                      </Flex>
                    ))}
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box overflowY='scroll' h='411px' css={scrollBarStyle}>
                    {experience.sort((a, b) => b.startDate.getTime() - a.startDate.getTime()).map((item, index) => (
                      <Flex key={index} mt='18px' alignItems='center'>
                        <Avatar
                          width='64px'
                          height='64px'
                          name={item.company}
                          src={item.avatar}
                        />
                        <Flex flexDir='column' ml='16px'>
                          <Text fontSize='1em' fontWeight='bold'>{item.company}</Text>
                          <Text fontSize='1em'>{item.role}</Text>
                          <Text fontSize='1em'>{formatDate(item.startDate)} - {item.current ? 'Current' : formatDate(item.endDate)}</Text>
                          <Text fontSize='0.8em'>{item.description}</Text>
                        </Flex>
                      </Flex>
                    ))}
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box overflowY='scroll' h='411px' css={scrollBarStyle}>
                    {skills.map((item, index) => (
                      <Flex key={index} mt='12px' alignItems='center'>
                        <Image src={item.logo} width='64px' height='64px' />
                        <Flex flexDir='column' ml='16px'>
                          <Text fontSize='1em' fontWeight='bold'>{item.name}</Text>
                          <Text fontSize='1em'>{formatDate(item.since)}</Text>
                          <Text fontSize='0.8em'>{item.description}</Text>
                        </Flex>
                      </Flex>
                    ))}
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box overflowY='scroll' h='411px' css={scrollBarStyle}>
                    {personalProjects.map((item, index) => (
                      <Flex key={index} mt='18px' alignItems='center'>
                        <Image src={item.icon} width='64px' height='64px' />
                        <Flex flexDir='column' ml='16px'>
                          <Text fontSize='1.3em' fontWeight='bold' color='#3fbafe' cursor='pointer' onClick={() => window.open(item.url, '_blank')}>{item.name}</Text>
                          <Text fontSize='1em'>{item.description}</Text>
                          <Text fontSize='0.7em'>{item.techs.join(', ')}</Text>
                        </Flex>
                      </Flex>
                    ))}
                    <Flex alignItems='center' flexDir='column'>
                      <Text fontSize='0.7em' mt='16px'>Logos from project pricipal techs</Text>
                    </Flex>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
            </Box>
        </Flex>
      </Box>
    </Center>
  );
}

export default Home;