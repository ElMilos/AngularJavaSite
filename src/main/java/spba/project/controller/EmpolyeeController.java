package spba.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spba.project.entities.Employee;
import spba.project.exceptions.ResourcesNotFoundException;
import spba.project.repositories.EmployeeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EmpolyeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees()
    {
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee)
    {
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id)
    {
        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new ResourcesNotFoundException("Employye not found")
        );
        return  ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee( @PathVariable Long id, @RequestBody Employee employeeNew)
    {
        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new ResourcesNotFoundException("Employye not found")
        );
        employee.setFirstName(employeeNew.getFirstName());
        employee.setLastName(employeeNew.getLastName());
        employee.setEmailId(employeeNew.getEmailId());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity< Map<String, Boolean>> deleteEmployee(@PathVariable Long id)
    {
        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new ResourcesNotFoundException("Employye not found")
        );
        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
