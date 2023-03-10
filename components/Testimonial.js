
  return (
    <section className="test-overall" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="test-prior">Our Student Testimonial</h2>
                <p className="test-text">Our Student</p>
                <Row>
                    {
                        Head.map((Head, index) => {
                        return (
                                <StudentInfo
                                    key={index}
                                    {...Head}
                                />
                        )
                        })
                    }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}