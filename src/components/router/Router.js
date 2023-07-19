import React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Friends from "../Friends/Friends";
import Watch from "../Watch/Watch";
import Marketplace from "../Marketplace/Marketplace";
import Groups from "../Groups/Groups";
import Layout from "../layout/Layout";
import Profile from "../Profile/Profile";
import CreateStories from "../CreateStories/CreateStories";
import Memories from "../Memories/Memories";
import Saved from "../Saved/Saved";
import Feeds from "../Feeds/Feeds";
import Events from "../Events/Events";
import LiveVideo from "../LiveVideo/LiveVideo"

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="friends" element={<Friends />} />
            <Route path="watch" element={<Watch />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="groups" element={<Groups />} />
            <Route path="profile" element={<Profile />} />
            <Route path="findfriends" element={<Friends />} />
            <Route path="memories" element={<Memories/>} />
            <Route path="saved" element={<Saved />} />
            <Route path="marketplace" element={<Watch />} />
            <Route path="watch" element={<Marketplace />} />
            <Route path="feeds" element={<Feeds />} />
            <Route path="events" element={<Events />} />
            <Route path="create/stories" element={<CreateStories />} />
            <Route path="live" element={<LiveVideo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
