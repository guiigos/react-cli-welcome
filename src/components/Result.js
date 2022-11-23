const React = require('react');
const { Box, Text, Newline } = require('ink')

const Result = ({ name, repoitories }) => (
  <>
    <Text>{name}</Text>
    <Newline/>

    <Box flexDirection='column'>
      <Box>
        <Box width='25%'><Text>Repository</Text></Box>
        <Box width='25%'><Text>Description</Text></Box>
      </Box>
      <Newline/>
        {
          repoitories.map(({ name, description }) => (
            <Box key={id}>
              <Box width='25%'>
                <Text>{name}</Text>
              </Box>
              <Box width='75%'>
                <Text color='cyan'>{description}</Text>
              </Box>
            </Box>
          ))
        }
    </Box>
  </>
);

module.exports = Result;
