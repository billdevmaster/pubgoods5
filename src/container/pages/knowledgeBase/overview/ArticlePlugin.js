import React from 'react';
import { Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { ArticleTabContentWrap } from '../style';

function ArticlePlugin() {
  return (
    <ArticleTabContentWrap>
      <div className="sDash_article-tab-content">
        <Row>
          <Col md={8} sm={12} xs={24}>
            <div className="sDash_article-tab-signle">
              <h2 className="sDash_article-tab-signle__title">APECOIN DAO GOVERNANCE</h2>
              <ul className="sDash_article-tab-signle__list">
                <li>
                  <NavLink to="/admin/knowledgebaseSingle/1">MEMBERSHIP</NavLink>
                </li>
                <li>
                  <NavLink to="#">GUIDING VALUES</NavLink>
                </li>
                <li>
                  <NavLink to="#">Boldness</NavLink>
                </li>
                <li>
                  <NavLink to="#">Equality</NavLink>
                </li>
              </ul>
              <Link to="/admin/knowledgebaseSingle/1" className="btn-link">
                See more <ArrowRightOutlined />
              </Link>
            </div>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <div className="sDash_article-tab-signle">
              <h2 className="sDash_article-tab-signle__title">COMMUNICATION CHANNELS</h2>
              <ul className="sDash_article-tab-signle__list">
                <li>
                  <NavLink to="/admin/knowledgebaseSingle/1">Discourse</NavLink>
                </li>
                <li>
                  <NavLink to="#">Snapshot</NavLink>
                </li>
                <li>
                  <NavLink to="#">Voting</NavLink>
                </li>
                <li>
                  <NavLink to="#">Approval processes</NavLink>
                </li>
              </ul>
              <Link to="/admin/knowledgebaseSingle/1" className="btn-link">
                See more <ArrowRightOutlined />
              </Link>
            </div>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <div className="sDash_article-tab-signle">
              <h2 className="sDash_article-tab-signle__title">PROPOSAL CATEGORIES</h2>
              <ul className="sDash_article-tab-signle__list">
                <li>
                  <NavLink to="/admin/knowledgebaseSingle/1">Log in and out of Plugins</NavLink>
                </li>
                <li>
                  <NavLink to="#">CORE</NavLink>
                </li>
                <li>
                  <NavLink to="#">ECOSYSTEM</NavLink>
                </li>
                <li>
                  <NavLink to="#">FUND ALLOCATION</NavLink>
                </li>
              </ul>
              <Link to="/admin/knowledgebaseSingle/1" className="btn-link">
                See more <ArrowRightOutlined />
              </Link>
            </div>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <div className="sDash_article-tab-signle">
              <h2 className="sDash_article-tab-signle__title">BRAND DECISION</h2>
              <ul className="sDash_article-tab-signle__list">
                <li>
                  <NavLink to="/admin/knowledgebaseSingle/1">PROCESS</NavLink>
                </li>
                <li>
                  <NavLink to="#">PROCESS (RESUBMISSION)</NavLink>
                </li>
                <li>
                  <NavLink to="#">INFORMATIONAL</NavLink>
                </li>
                <li>
                  <NavLink to="#">INFORMATIONAL (Resubmission)</NavLink>
                </li>
              </ul>
              <Link to="/admin/knowledgebaseSingle/1" className="btn-link">
                See more <ArrowRightOutlined />
              </Link>
            </div>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <div className="sDash_article-tab-signle">
              <h2 className="sDash_article-tab-signle__title">PROPOSAL TEMPLATE</h2>
              <ul className="sDash_article-tab-signle__list">
                <li>
                  <NavLink to="/admin/knowledgebaseSingle/1">Abstract</NavLink>
                </li>
                <li>
                  <NavLink to="#">Motivation</NavLink>
                </li>
                <li>
                  <NavLink to="#">Rationale</NavLink>
                </li>
                <li>
                  <NavLink to="#">Key Terms (optional)</NavLink>
                </li>
              </ul>
              <Link to="/admin/knowledgebaseSingle/1" className="btn-link">
                See more <ArrowRightOutlined />
              </Link>
            </div>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <div className="sDash_article-tab-signle">
              <h2 className="sDash_article-tab-signle__title">PROPOSAL PHASES</h2>
              <ul className="sDash_article-tab-signle__list">
                <li>
                  <NavLink to="/admin/knowledgebaseSingle/1">PHASE 1: AIP IDEA</NavLink>
                </li>
                <li>
                  <NavLink to="#">PHASE 2: AIP DRAFT</NavLink>
                </li>
                <li>
                  <NavLink to="#">PHASE 3: AIP ANALYSIS REPORT</NavLink>
                </li>
                <li>
                  <NavLink to="#">PHASE 4: AIP MODERATION</NavLink>
                </li>
              </ul>
              <Link to="/admin/knowledgebaseSingle/1" className="btn-link">
                See more <ArrowRightOutlined />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </ArticleTabContentWrap>
  );
}

export default ArticlePlugin;
