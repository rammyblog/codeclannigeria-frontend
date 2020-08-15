import React from 'react';
import UserProfileStyled from './userProfileStyled';
import DashboardLayout from '../../common/DashboardLayout';
import InfoCardBig from './InfoCardBig';
import { connect } from 'react-redux';

import UserCard from '../../common/UserCard/UserCard';

function UserProfile({ loading, data }) {
  const Tracks = [
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Frontend Development',
    },
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Backend Development',
    },
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Mobile Development',
    },
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Desktop Development',
    },
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Ui/UX',
    },
  ];

  const SocialMedia = [
    {
      icon: <i class="fab fa-twitter"></i>,
      title: 'Twitter',
    },
    {
      icon: <i class="fab fa-dribbble"></i>,
      title: 'Dribble',
    },
    {
      icon: <i class="fab fa-behance"></i>,
      title: 'Behance',
    },
    {
      icon: <i class="fab fa-linkedin-in"></i>,
      title: 'LinkedIn',
    },
    {
      icon: <i class="fab fa-github"></i>,
      title: 'Github',
    },
  ];

  return (
    <UserProfileStyled>
      <UserCard data={data} mode="mentee" />
      {/* <div className="personal--details--card">
        <div className="user__personal__details">
          <div className="img__wrap">
            <img
              src={photoUrl}
              alt="user"
              // onMouseEnter={() => setshowImageEdit(true)}
              className={`rounded-circle user__image `}
            />
            <div class="img__description">
              <i class="fas fa-camera"></i>
              {photoUrl ? (
                <>
                  <button
                    class="btn btn-sm"
                    onClick={() => setshowImageEdit(true)}
                  >
                    Change Picture
                  </button>
                  <ProfileImageUpload
                    visible={showImageEdit}
                    photoUrl={photoUrl}
                    name={lastName}
                    onCreate={onCreate}
                  />{' '}
                </>
              ) : null}
            </div>
          </div>
          <div className="user__details">
            <p className="user__name">
              {firstName} {lastName}
            </p>
          </div>

          <p className="user__track">Frontend Track</p>
        </div>

        <hr />
        <div className="user__contact__info">
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <span>Ibadan, Nigeria</span>
          </div>
          <div>
            <i class="far fa-envelope"></i>
            <span>{email}</span>
          </div>
        </div>
        <hr />
        <div className="text-center edit__profile__btn__container">
          {data ? (
            <>
              <button
                className="btn btn-lg edit__profile__btn"
                onClick={() => {
                  setVisible(true);
                }}
              >
                Edit profile
              </button>
              <EditProfileForm
                visible={visible}
                onCreate={onCreate}
                initialData={data}
                onCancel={() => {
                  setVisible(false);
                }}
              />
            </>
          ) : null}
        </div>
      </div> */}

      <div className="public__info__grid">
        <InfoCardBig header="Tracks Completed" data={Tracks} />
        <InfoCardBig header="Social Media" data={SocialMedia} />
      </div>
    </UserProfileStyled>
  );
}

const mapStateToProps = store => {
  const { loading, data, error, errResponse } = store.user;
  return {
    loading,
    data,
    error,
    errResponse,
  };
};

const mapDispatchToProps = {};

export default DashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(UserProfile)
);
