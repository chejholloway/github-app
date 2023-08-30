import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import Org from "../../types/Org";
import Developer from "../../types/Developer";

import { Title } from "../../styles/TwinStyles.styles";

interface OrgsListProps {
  developer: Developer | undefined;
  org: Org[] | undefined;
}

const OrgsList: React.FC<OrgsListProps> = ({ org }) => {
  return (
    <div className="text-gray-700">
      <Title className="font-normal text-center">Organizations</Title>
      {org ? (
        org.map((org) => (
          <div key={org.id}>
            <Link to={`${process.env.REACT_APP_GITHUB_URL}/${org.login}`}>
              <Card className="m-2">
                <List>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt={org?.login}
                        src={org?.avatar_url}
                      />
                    </ListItemPrefix>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {org.login}
                    </Typography>
                  </ListItem>
                </List>
              </Card>
            </Link>
          </div>
        ))
      ) : (
        <p>No organizations available.</p>
      )}
    </div>
  );
};

export default OrgsList;
