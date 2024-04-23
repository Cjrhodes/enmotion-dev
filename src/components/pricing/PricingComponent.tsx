"use client"
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleContactModalOpen } from '@/redux/features/contactModalSlice';

interface PricingItemProps {
  category: string;
  sessions: {
    type: string;
    price: number;
  }[];
  packageDeals: {
    type: string;
    price: number;
    perSession: number;
  }[];
}

const PricingItem: React.FC<PricingItemProps> = ({ category, sessions, packageDeals }) => {
  const dispatch = useDispatch();

  const handleContactClick = () => {
    dispatch(toggleContactModalOpen({ packageName: category, packageType: 'pricing' }));
  };

  return (
    <Card className="pricing-item mb-4 bg-dark text-white shadow">
      <Card.Body>
        <Card.Title className="text-center mb-4">{category}</Card.Title>
        <Card.Text as="div">
          <h5 className="text-info">Single Sessions:</h5>
          <ul className="list-unstyled">
            {sessions.map((session, index) => (
              <li key={index}>
                <strong>{session.type}:</strong> ${session.price} per session
              </li>
            ))}
          </ul>
          <h5 className="text-info mt-4">Package Deals (10 sessions):</h5>
          <ul className="list-unstyled">
            {packageDeals.map((packageDeal, index) => (
              <li key={index}>
                <strong>{packageDeal.type}:</strong> ${packageDeal.price} (${packageDeal.perSession} per session)
              </li>
            ))}
          </ul>
        </Card.Text>
        <div className="d-flex justify-content-center mt-4">
          <Button variant="info" onClick={handleContactClick}>
            Select
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const PricingComponent: React.FC = () => {
  const pricingData = [
    {
      category: 'Self-Defense Classes',
      sessions: [
        { type: 'In-person', price: 80 },
        { type: 'Online', price: 60 },
      ],
      packageDeals: [
        { type: 'In-person', price: 700, perSession: 70 },
        { type: 'Online', price: 500, perSession: 50 },
      ],
    },
    {
      category: 'Corporate Wellness Programs',
      sessions: [
        { type: 'In-person', price: 200 },
        { type: 'Online', price: 150 },
      ],
      packageDeals: [
        { type: 'In-person', price: 1800, perSession: 180 },
        { type: 'Online', price: 1300, perSession: 130 },
      ],
    },
    {
      category: 'Personal Training',
      sessions: [
        { type: 'In-person', price: 75 },
        { type: 'Online', price: 60 },
      ],
      packageDeals: [
        { type: 'In-person', price: 650, perSession: 65 },
        { type: 'Online', price: 500, perSession: 50 },
      ],
    },
  ];

  return (
        <section id='PricingComponent'>
            <div className="pricing-component bg-dark py-5" >
              <h2 className="text-center text-white mb-5">Pricing</h2>
              <div className="row">
                {pricingData.map((item, index) => (
                  <div key={index} className="col-md-4">
                    <PricingItem category={item.category} sessions={item.sessions} packageDeals={item.packageDeals} />
                  </div>
                ))}
              </div>
            </div>
        </section>
  );
};

export default PricingComponent;