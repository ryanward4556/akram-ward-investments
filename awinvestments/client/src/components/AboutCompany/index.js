import React from "react";
import "./style.css";

var investmentStyle = {
  color: "green",
  fontFamily: "Orbitron",
  paddingTop: "2rem"
}

var hrStyle = {
  width: "80%",
  marginLeft: "10%",
  marginRight: "10%",
}

function AboutCompany(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">MEET OUR TEAM</h2>
          </div>
        </div>
        <div className="row" id="portfolio-managers">
          <div className="col-6" id="manager1">
            <h3 className="text-center" id="manager">martin akram</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-6" id="manager2">
            <h3 className="text-center" id="manager">ryan ward</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <hr style={hrStyle} />
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">INVESTMENT STRATEGIES</h2>
          </div>
        </div>
        <div className="row" id="investment-strategies">
          <div className="col-6" id="strategy1">
            <h3 className="text-center">A&W large cap <span style={investmentStyle}>value</span></h3>
            <p>The A&W Large Cap Value strategy seeks a concentrated portfolio of undervalued
              large cap equities of companies with low expectations and improving fundamentals.
              Special emphasis is placed on identifying catalysts that can accelerate earnings
              growth. Over time, the market rewards these types of companies. The team’s goal
              is to generate competitive returns over a 3-5 year period with low turnover.</p>
            <br></br>
            <h5>Quick Portfolio Facts</h5>
            <p>◈ <strong>Primary Benchmark:</strong> Russell 1000 Value Index</p>
            <p>◈ <strong>Number of holdings:</strong> 37 (Index: 722)</p>
            <p>◈ <strong>Median market capitalization:</strong> $47.52B (Index: $67.96B)</p>
            <p>◈ <strong>Model Inception:</strong> March 01, 2009</p>
            <br></br>
            <h5>Top 5 Holdings</h5>
            <table class="table table-sm">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Security</th>
                  <th scope="col" class="text-center">Portfolio Weight</th>
                  <th scope="col" class="text-center">Benchmark Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">FMC</th>
                  <td>4.42%</td>
                  <td>0.05%</td>
                </tr>
                <tr>
                  <th scope="row">Verizon</th>
                  <td>4.40%</td>
                  <td>1.76%</td>
                </tr>
                <tr>
                  <th scope="row">Corning</th>
                  <td>3.91%</td>
                  <td>0.19%</td>
                </tr>
                <tr>
                  <th scope="row">Humana</th>
                  <td>3.88%</td>
                  <td>0.02%</td>
                </tr>
                <tr>
                  <th scope="row">Tyson Foods</th>
                  <td>3.70%</td>
                  <td>0.18%</td>
                </tr>
              </tbody>
            </table>
            <h5>Calendar Year Returns</h5>
            <table class="table table-sm">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col" class="text-center">Gross of Fees (%)</th>
                  <th scope="col" class="text-center">Net of Fees (%)</th>
                  <th scope="col" class="text-center">Index Return (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2018</th>
                  <td>-11.34</td>
                  <td>-13.99</td>
                  <td>-8.27</td>
                </tr>
                <tr>
                  <th scope="row">2017</th>
                  <td>21.76</td>
                  <td>18.22</td>
                  <td>13.66</td>
                </tr>
                <tr>
                  <th scope="row">2016</th>
                  <td>20.25</td>
                  <td>16.75</td>
                  <td>17.34</td>
                </tr>
                <tr>
                  <th scope="row">2015</th>
                  <td>-2.81</td>
                  <td>-5.69</td>
                  <td>-3.83</td>
                </tr>
                <tr>
                  <th scope="row">2014</th>
                  <td>13.65</td>
                  <td>10.32</td>
                  <td>13.45</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-6" id="strategy2">
            <h3 className="text-center">A&W large cap <span style={investmentStyle}>growth</span></h3>
            <p>The A&W Large Cap Growth strategy seeks long-term capital appreciation by investing
              in a concentrated portfolio of large cap equities with high growth potential. Our
              management team screens potential candidates with an eye to individual company
              fundamentals, as well as to their macroeconomic outlook. We target firms with what
              we believe to be a sustainable growth franchise.</p>
            <br></br>
            <h5>Quick Portfolio Facts</h5>
            <p>◈ <strong>Primary Benchmark:</strong> Russell 1000 Growth Index</p>
            <p>◈ <strong>Number of holdings:</strong> 32 (Index: 546)</p>
            <p>◈ <strong>Median market capitalization:</strong> $54.59B (Index: $110.47B)</p>
            <p>◈ <strong>Model Inception:</strong> March 31, 2008</p>
            <br></br>
            <h5>Top 5 Holdings</h5>
            <table class="table table-sm">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Security</th>
                  <th scope="col" class="text-center">Portfolio Weight</th>
                  <th scope="col" class="text-center">Benchmark Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Facebook</th>
                  <td>4.81%</td>
                  <td>3.31%</td>
                </tr>
                <tr>
                  <th scope="row">Amazon.com</th>
                  <td>4.60%</td>
                  <td>3.60%</td>
                </tr>
                <tr>
                  <th scope="row">Alibaba ADR</th>
                  <td>4.10%</td>
                  <td>0.00%</td>
                </tr>
                <tr>
                  <th scope="row">Illumina</th>
                  <td>3.92%</td>
                  <td>0.39%</td>
                </tr>
                <tr>
                  <th scope="row">NVIDIA</th>
                  <td>3.91%</td>
                  <td>0.69%</td>
                </tr>
              </tbody>
            </table>
            <h5>Calendar Year Returns</h5>
            <table class="table table-sm">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col" class="text-center">Gross of Fees (%)</th>
                  <th scope="col" class="text-center">Net of Fees (%)</th>
                  <th scope="col" class="text-center">Index Return (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2018</th>
                  <td>-3.85</td>
                  <td>-6.70</td>
                  <td>-1.51</td>
                </tr>
                <tr>
                  <th scope="row">2017</th>
                  <td>35.71</td>
                  <td>31.79</td>
                  <td>30.21</td>
                </tr>
                <tr>
                  <th scope="row">2016</th>
                  <td>-8.28</td>
                  <td>-11.01</td>
                  <td>7.08</td>
                </tr>
                <tr>
                  <th scope="row">2015</th>
                  <td>7.71</td>
                  <td>4.54</td>
                  <td>5.67</td>
                </tr>
                <tr>
                  <th scope="row">2014</th>
                  <td>8.47</td>
                  <td>5.28</td>
                  <td>13.05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
      </div>
    </div >
  );
}

export default AboutCompany;