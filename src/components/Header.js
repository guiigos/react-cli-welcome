const React = require('react');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');

const Header = ({ user }) => (
  <Gradient name="summer">
    <BigText
      text={`welcome - ${user}`}
      align='center'
      font='chrome'
    />
  </Gradient>
);

module.exports = Header;
