import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React from "react";
import { Flex, Box, Text } from "rebass";

const strings = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

/* tslint:disable-next-line: no-empty-interface */
interface Props {}

class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  public render() {
    return (
      <Flex mx={0} flexWrap="wrap">
        {strings &&
          strings.map((str: string) => (
            <Box width={1} key={str} bg="blue">
              <Text p={1} color="white">
                {str}
              </Text>
            </Box>
          ))}
      </Flex>
    );
  }
}

const mapStateToProps = (state: any) => {
  return;
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
